import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  currentProject = 0;
  playIntro = false;
  showMenu = false;
  project = {
    title: 'Title A', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius finibus suscipit.
  Vestibulum nibh quam, faucibus quis scelerisque id, ullamcorper vulputate arcu. Nam vel pharetra justo. Suspendisse id
  tellus quis neque luctus mattis. Morbi sollicitudin lacus vel massa molestie dictum. Sed tincidunt vitae
  lorem in mollis.
  Etiam ultrices tempus ipsum, vitae posuere quam pulvinar eget. Duis pulvinar erat quis
  ullamcorper rutrum. Nam maximus ligula eu eleifend tincidunt. Curabitur dapibus purus non diam pharetra ornare.`, img: 'assets/image.jpg'
  };
  project2 = {
    title: 'Title B', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius finibus suscipit.
  Vestibulum nibh quam, faucibus quis scelerisque id, ullamcorper vulputate arcu. Nam vel pharetra justo. Suspendisse id
  tellus quis neque luctus mattis. Morbi sollicitudin lacus vel massa molestie dictum. Sed tincidunt vitae
  lorem in mollis.
  Etiam ultrices tempus ipsum, vitae posuere quam pulvinar eget. Duis pulvinar erat quis
  ullamcorper rutrum. Nam maximus ligula eu eleifend tincidunt. Curabitur dapibus purus non diam pharetra ornare.`, img: 'assets/image.jpg'
  };
  project3 = {
    title: 'Title C', text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius finibus suscipit.
  Vestibulum nibh quam, faucibus quis scelerisque id, ullamcorper vulputate arcu. Nam vel pharetra justo. Suspendisse id
  tellus quis neque luctus mattis. Morbi sollicitudin lacus vel massa molestie dictum. Sed tincidunt vitae
  lorem in mollis.
  Etiam ultrices tempus ipsum, vitae posuere quam pulvinar eget. Duis pulvinar erat quis
  ullamcorper rutrum. Nam maximus ligula eu eleifend tincidunt. Curabitur dapibus purus non diam pharetra ornare.`, img: 'assets/image.jpg'
  };
  public Projects = [this.project, this.project2, this.project3];

  constructor() { }

  ngOnInit() {
  }
 
  scrollAndClose(el: HTMLElement) {
    this.showMenu = false;
    this.scroll(el);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  position(id:number) {
    this.currentProject = id;
  }
}
