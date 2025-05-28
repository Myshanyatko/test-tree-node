import { Component, input, signal } from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { INode } from '../node/node.interface';

@Component({
  selector: 'tree',
  imports: [NodeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.css'
})
export class TreeComponent {
  nodes = input<INode[]>();

  isCollapse = signal(false);

  setCollapse() {
    this.isCollapse.update(val => !val);
  }
}
