import { Component } from "@angular/core";
import { TextSelectEvent } from "./text-select.directive";

interface SelectionRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "text-select";
  public hostRectangle: SelectionRectangle | null;

  private selectedText: string;
  constructor() {
    this.hostRectangle = null;
    this.selectedText = "";
  }
  public renderRectangles(event: TextSelectEvent): void {
    console.group("Text Select Event");
    console.log("Text:", event.text);
    console.log("Viewport Rectangle:", event.viewportRectangle);
    console.log("Host Rectangle:", event.hostRectangle);
    if (event.hostRectangle) {
      this.hostRectangle = event.hostRectangle;
      this.selectedText = event.text;
    } else {
      this.hostRectangle = null;
      this.selectedText = "";
    }
  }
  public shareSelection(): void {
    console.group("Shared Text");
    console.log(this.selectedText);
    console.groupEnd();
    document.getSelection().removeAllRanges();
    this.hostRectangle = null;
    this.selectedText = "";
  }
}
