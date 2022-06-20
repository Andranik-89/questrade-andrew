import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService, NewsUnitInterface } from '../news.service';

@Component({
  selector: 'app-news-unit',
  templateUrl: './news-unit.component.html',
  styleUrls: ['./news-unit.component.scss']
})
export class NewsUnitComponent implements OnInit {
  public news: NewsUnitInterface = {
    _id: '',
    title: '',
    content: '',
    urlToImage: '',
  };

  constructor(private activeRout: ActivatedRoute, private newsServide: NewsService) { }

  ngOnInit(): void {
    const _id = (this.activeRout.snapshot.params as any).newsId;
    this.newsServide.getArticleById(_id).subscribe(news => {
      this.news = news;
    })
  }

}
