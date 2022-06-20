import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { switchMap, tap } from 'rxjs/operators';

interface NewsUnitInterface {
  title: string,
  _id: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public news: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getArticles().subscribe(news => {
      this.news = news;
    });
  }

  public generateNews() {
    this.newsService.initArticles().pipe(
      switchMap(
        news => {
          const newsIndex = Math.floor(Math.random() * news.articles.length);
          const newsPiece = news.articles[newsIndex];
          const newsObj = {
            title: newsPiece.title,
            content: newsPiece.content,
            urlToImage: newsPiece.urlToImage
          }
          return this.newsService.saveArticle(newsObj);
        }
      )
    )
    .subscribe(item => {
      this.news.push({_id: item._id, title: item.title})
    }
    );
  }
}
