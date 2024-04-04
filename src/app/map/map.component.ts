import { Component, ElementRef, ViewChild, AfterViewInit }from '@angular/core';
declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map', { static: true })
  private mapElement!: ElementRef;

  private platform!: any;
  private map: any;

  address: string = '';

  constructor() {}

  ngAfterViewInit() {



    this.platform = new H.service.Platform({
      apikey: 'Wjx1Er-326XP7wrSEiuJlxlCdPyHrkH0OeJihNsteYs' 
    });

    const defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        center: { lat: 0, lng: 0 },
        zoom: 2
      }
    );
  
    const mapEvents = new H.mapevents.MapEvents(this.map);
    const behavior = new H.mapevents.Behavior(mapEvents);
  
    
    this.map.addEventListener('wheel', (event: any) => {
      try {
        
        event.preventDefault();
    
        console.log('Scroll event detected.');
    
        let delta = 0;

        if (event.deltaY) {
          delta = event.deltaY;
        } else {
          if (event.delta) {
            delta = event.delta;
          } else {
            if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
            } else {
              delta = -event.detail / 3;
            }
          }
        }

        console.log('Delta:', delta);
    
    

        let zoom = this.map.getZoom();


        zoom += delta > 0 ? -1 : 1; 

        // Ensure zoom level is within valid range (typically 0 to 20)
        zoom = Math.max(0, Math.min(20, zoom)); 
 
        this.map.setZoom(zoom);
      } catch (error) {
        console.error('Error handling scroll event:', error);
      }
    });
  }

  search() {
    if (!this.address.trim()) return;
  
    if (!this.map) {
      console.error('Map is not initialized.');
      return;
    }
  
    const geocoder = this.platform.getSearchService();
    const map = this.map;
  
    geocoder.geocode({ q: this.address }, (result: any) => {
      if (result.items.length > 0) {
        const position = result.items[0].position;
  
        // Set map center and zoom
        map.setCenter(position);
        map.setZoom(15);
  
        // Add marker at the found address
        const marker = new H.map.Marker(position);
        map.addObject(marker);
      } else {
        alert('Address not found!');
      }
    }, (error: any) => { // Explicitly specify the type of 'error' parameter
      alert('Geocoding failed: ' + error);
    });
  }
  
}
