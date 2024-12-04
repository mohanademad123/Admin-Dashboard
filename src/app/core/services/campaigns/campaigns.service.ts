import { Injectable, signal } from '@angular/core';
import { ICampaign } from '../../models/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {
  private campaigns = signal<ICampaign[]>([]);
  currentCampaigns = this.campaigns.asReadonly();

  constructor() {
    this.generateDummyData();
  }

  generateDummyData() {
    this.campaigns.set([
      {
        img: 'campaigns/twitch.svg',
        title: 'Twitch Posts',
        count: 50000,
        status: {
          percentage: '- 40.5%',
          description: 'more impressions'
        },
        info: {
          percentage: '0.5%',
          description: 'MRR'
        }
      },
      {
        img: 'campaigns/twitter.svg',
        title: 'Twitter Followers',
        count: 807000,
        status: {
          percentage: '+ 17.62%',
          description: 'Followers growth'
        },
        info: {
          percentage: '5%',
          description: 'New trials'
        }
      },
      {
        img: 'campaigns/spotify.svg',
        title: 'Spotify Listeners',
        count: 173000,
        status: {
          percentage: '- 10.45%',
          description: 'Less comments than usual'
        },
        info: {
          percentage: '40%',
          description: 'Impressions'
        }
      },
      {
        img: 'campaigns/pinterest-p.svg',
        title: 'Pinterest Posts',
        count: 521,
        status: {
          percentage: '+ 26.1%',
          description: 'More posts'
        },
        info: {
          percentage: '10%',
          description: 'Spend'
        }
      },
      {
        img: 'campaigns/github.svg',
        title: 'Github Contributes',
        count: 4109,
        status: {
          percentage: '- 32.8%',
          description: 'Less contributions'
        },
        info: {
          percentage: '40%',
          description: 'Spend'
        }
      },
      {
        img: 'campaigns/youtube.svg',
        title: 'Youtube Subscribers',
        count: 7440000,
        status: {
          percentage: '+ 29.45%',
          description: 'Subscribers growth'
        },
        info: {
          percentage: '60%',
          description: 'Subscribers'
        }
      },
      {
        img: 'campaigns/telegram.svg',
        title: 'Telegram Posts',
        count: 566,
        status: {
          percentage: '+ 11.4%',
          description: 'more clicks'
        },
        info: {
          percentage: '33%',
          description: 'Profit'
        }
      },
      {
        img: 'campaigns/reddit.svg',
        title: 'Reddit Awards',
        count: 2100000,
        status: {
          percentage: '+ 77.3%',
          description: 'more adds'
        },
        info: {
          percentage: '0%',
          description: 'Retention'
        }
      },
    ]);
  }
}
