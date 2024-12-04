import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, startWith } from 'rxjs';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  titleFromPath = signal('');

  ngOnInit(): void {
    this.getTitleFromRouterData();
  }

  private getTitleFromRouterData() {
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(this.router),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        const title = data['title'];
        if (title) {
          this.titleFromPath.set(title);
        }
      });
  }
}
