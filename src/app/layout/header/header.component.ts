import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  pageTitle: string = 'Security';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child?.firstChild) child = child.firstChild;

          return (
            child?.snapshot.data['title'] ??
            child?.snapshot.data['label'] ??
            child?.title ??
            'Security'
          );
        }),
      )
      .subscribe((title) => (this.pageTitle = title));
  }
}
