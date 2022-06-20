import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface InitNewsInterface {
  articles: any[],
  status: string,
  totalResults: number
}

export interface NewsUnitInterface {
  _id: string
  title: string,
  content: string,
  urlToImage: string,
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  public initArticles() {
    return this.http.get<InitNewsInterface>(`https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${environment.api_key}`).pipe(
      tap(news => {
        //console.log('news: ', news);
      })
    );
  }

  public saveArticle(body: {title: string, content: string, urlToImage: string}) {
    return this.http.post<NewsUnitInterface>(`${environment.api}/news`, body).pipe(
      tap(news => {
        console.log('news: ', news);
      })
    );
  }

  public getArticles() {
    return this.http.get<any[]>(`${environment.api}/news`);
  }

  public getArticleById(_id: string) {
    return this.http.get<NewsUnitInterface>(`${environment.api}/news/${_id}`);
  }

}
