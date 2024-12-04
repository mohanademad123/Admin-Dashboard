import { Injectable, signal } from '@angular/core';
import { IPost } from '../../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts = signal<IPost[]>([]);
  currentPosts = this.posts.asReadonly();

  constructor() {
    this.generateDummyData();
  }

  private generateDummyData() {
    this.posts.set([
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male6.png',
        name: 'Nick Logan',
        time: new Date().toISOString(),
        content:
          'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post',
        likes: 120,
        loves: 15,
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male7.png',
        name: 'Carles Nilson',
        time: '2024-09-15T16:19:50Z',
        content:
          'Discover the hottest tech innovations of 2024, including AI breakthroughs, VR advancements, and sustainable tech solutions.',
        likes: 213,
        loves: 45,
        comments: [
          {
            id: Math.round(Math.random() * 10000),
            name: 'John Doe',
            imgUrl: 'users/male8.png',
            time: '2024-09-15T17:00:00Z',
            content:
              "This is a fascinating article. I'm excited about the future of AI.",
          },
          {
            id: Math.round(Math.random() * 10000),
            name: 'Jane Smith',
            imgUrl: 'users/male9.png',
            time: '2024-09-16T09:30:00Z',
            content: "I'd love to learn more about sustainable tech solutions.",
          },
        ],
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male19.png',
        name: 'David Chen',
        time: '2024-09-16T10:30:00Z',
        content:
          "The rise of quantum computing: How it's revolutionizing cryptography, drug discovery, and complex problem-solving across industries.",
        contentImgUrl: 'posts/1.jpg',
        likes: 342,
        loves: 78,
        comments: [
          {
            id: Math.round(Math.random() * 10000),
            name: 'Emma Davis',
            imgUrl: '',
            time: '2024-09-16T11:15:00Z',
            content:
              "Quantum computing is mind-blowing! Can't wait to see its real-world applications.",
          },
          {
            id: Math.round(Math.random() * 10000),
            name: 'Oliver Johnson',
            imgUrl: 'users/male18.png',
            time: '2024-09-16T12:00:00Z',
            content:
              'How does quantum computing affect current encryption methods?',
          },
        ],
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male17.png',
        name: 'Michael Brown',
        time: '2024-09-17T09:45:00Z',
        content:
          '5G and beyond: Exploring the potential of 6G networks and their impact on IoT, autonomous vehicles, and smart cities of the future.',
        contentImgUrl: 'posts/2.jpg',
        likes: 287,
        loves: 56,
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male16.png',
        name: 'Daniel Kim',
        time: '2024-09-19T11:10:00Z',
        content:
          'The ethics of AI: Addressing bias, privacy concerns, and the need for responsible development in artificial intelligence systems.',
        likes: 389,
        loves: 87,
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: '',
        name: 'Ava Patel',
        time: '2024-09-20T16:55:00Z',
        content:
          'Blockchain beyond cryptocurrency: Exploring applications in supply chain management, voting systems, and decentralized finance (DeFi).',
        likes: 276,
        loves: 63,
        comments: [
          {
            id: Math.round(Math.random() * 10000),
            name: 'Thomas Anderson',
            imgUrl: 'users/male15.png',
            time: '2024-09-20T17:30:00Z',
            content:
              'Blockchain has so much potential. Excited to see its growth in various sectors!',
          },
          {
            id: Math.round(Math.random() * 10000),
            name: 'Grace Liu',
            imgUrl: '',
            time: '2024-09-20T18:15:00Z',
            content:
              'How does blockchain improve security in these applications?',
          },
        ],
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: '',
        name: 'Noah Thompson',
        time: '2024-09-22T13:25:00Z',
        content:
          'Sustainable tech: Innovations in renewable energy, eco-friendly materials, and carbon capture technologies leading the fight against climate change.',
        contentImgUrl: 'posts/3.jpg',
        likes: 678,
        loves: 145,
        comments: [
          {
            id: Math.round(Math.random() * 10000),
            name: 'Mia Johnson',
            imgUrl: '',
            time: '2024-09-22T15:30:00Z',
            content:
              'Are there any breakthroughs in making these technologies more affordable?',
          },
        ],
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male13.png',
        name: 'Alexander Wright',
        time: '2024-09-23T10:05:00Z',
        content:
          'The evolution of cybersecurity: Advanced threat detection, AI-powered defense systems, and the growing importance of digital hygiene in our interconnected world.',
        contentImgUrl: 'posts/4.jpg',
        likes: 423,
        loves: 89,
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male12.png',
        name: 'Yvonne Moore',
        time: '2024-09-24T15:50:00Z',
        content:
          'Neurotechnology advancements: Brain-computer interfaces, memory enhancement, and potential treatments for neurological disorders on the horizon.',
        contentImgUrl: 'posts/5.jpg',
        likes: 567,
        loves: 132,
      },
      {
        id: Math.round(Math.random() * 10000),
        imgUrl: 'users/male11.png',
        name: 'William Chen',
        time: '2024-09-25T09:15:00Z',
        content:
          'Space tech innovations: Reusable rockets, satellite constellations, and the race to establish sustainable human presence on Mars and beyond.',
        contentVideoUrl: 'posts/video.mp4',
        likes: 789,
        loves: 201,
      },
    ]);
  }
}
