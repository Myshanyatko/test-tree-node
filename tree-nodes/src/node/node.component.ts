import { Component, input, signal } from '@angular/core';
import { INode } from './node.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'node',
  imports: [CommonModule],
  templateUrl: './node.component.html',
  styleUrl: './node.component.css'
})
export class NodeComponent {
  node = input.required<INode>();

  isCollapse = signal(false);

  setCollapse() {
    this.isCollapse.update(val => !val);
  }
}
