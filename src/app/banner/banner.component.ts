import {Component, OnInit, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Gallery, GalleryComponent, GalleryItem, ImageItem} from "ng-gallery";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgOptimizedImage,
    GalleryComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  protected images: GalleryItem[] = [];

  ngOnInit(): void {
    this.images = [
      new ImageItem({ src: './assets/kaysvilleysa_01.jpeg', thumb: './assets/kaysvilleysa_01.jpeg', alt: "Group Christmas Photo" }),
      new ImageItem({ src: './assets/kay_02.jpeg', thumb: './assets/kay_02.jpeg', alt: "Christmas Photo" }),
      new ImageItem({ src: './assets/kay_03.jpeg', thumb: './assets/kay_03.jpeg', alt: "Christmas Photo" }),
    ]
  }

}
