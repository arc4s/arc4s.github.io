import {Component, OnInit} from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";


interface Family {
  name: string;
  children?: Family[];
}

const FAMILY_TREE: Family[] = [
  {
    name: "Joyce",
    children: [
      {name: "Mike"},
      {name: "Will"},
      {name: "Eleven", children: [{name: "Hopper"}]},
      {name: "Lucas"},
      {name: "Dustin", children: [{name: "Winona"}]},
    ],
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-language-tree',
  templateUrl: './language-tree.component.html',
  styleUrls: ['./language-tree.component.css']
})
export class LanguageTreeComponent implements OnInit {
  private _transformer = (node: Family, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(
    this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = FAMILY_TREE;
  }

  hasChild = (_: number,
              node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {}
}
