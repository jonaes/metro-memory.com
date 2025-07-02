export type SourceJson = {
  lines: {
    lineId: string
    relations: {
      relationId: number
      stationsNodeIds: number[]
      routesWayIds: number[]
    }[]
    extraStationNodeIds: number[]
    extraRouteWayIds: number[]
  }[]
  ways: { wayId: number; nodeIds: number[] }[]
  nodes: { nodeId: number; name?: string; lat: number; lon: number }[]
}

// ----------------------------------------
// line configuration
// ----------------------------------------
export const linesMetadata: {
  [id: string]: {
    name: string
    osm: {
      relationIds: number[]
      extraStationNodeIds: number[]
      extraRouteWayIds: number[]
    }
    color: string
  }
} = {
  SRM1: {
    name: 'S1',
    osm: {
      relationIds: [3413905],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#0095da',
  },
  SRM2: {
    name: 'S2',
    osm: {
      relationIds: [3414422],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#ee1c23',
  },
  SRM3: {
    name: 'S3',
    osm: {
      relationIds: [2445553],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#00A896',
  },
  SRM4: {
    name: 'S4',
    osm: {
      relationIds: [2515408],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#fecb09',
  },
  SRM5: {
    name: 'S5',
    osm: {
      relationIds: [2515355],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#945c38',
  },
  SRM6: {
    name: 'S6',
    osm: {
      relationIds: [1880910],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#f57921',
  },
  SRM7: {
    name: 'S7',
    osm: {
      relationIds: [456933],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#20543f',
  },
    SRM8: {
    name: 'S8',
    osm: {
      relationIds: [3415070],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#d7df23',
  },
  SRM9: {
    name: 'S9',
    osm: {
      relationIds: [3415113],
      extraStationNodeIds: [],
      extraRouteWayIds: [],
    },
    color: '#91268f',
  },
  
}

// ----------------------------------------
// extra nodes/ways (not included in relations)
// ----------------------------------------


// ----------------------------------------
// alternate names
// ----------------------------------------
export const alternateNames: { [stationName: string]: string[] | undefined } = {
  'Bad Homburg v. d. Höhe': [
    'Bad Homburg',
    '',
  ],
  '': [
    '',
  ],
  'Darmstadt Hauptbahnhof': [
    'Darmstadt Hbf',
  ],
  'Darmstadt-Arheilgen': [
    'Arheilgen',
  ],
  'Darmstadt-Wixhausen': [
    'Wixhausen',
  ],
  'Dietzenbach-Steinberg': [
    'Steinberg',
  ],
  'Dreieich-Buchschlag': [
    'Buchschlag',
  ],
  'Eppsein-Bremthal': [
    'Bremthal',
  ],
  'Flörsheim(Main)': [
    'Flörsheim',
  ],
  'Frankfurt (Main) Hauptbahnhof': [
    'Frankfurt Hauptbahnhof',
	'Frankfurt Hbf',
  ],
  'Frankfurt (Main) Süd': [
    'Frankfurt Süd',
  ],
  'Frankfurt am Main Flughafen Regionalbahnhof': [
    'Frankfurt Flughafen',
	'Frankfurt (Main) Flughafen',
	'Flughafen Regionalbahnhof',
	'Flughafen',
  ],
  'Frankfurt am Main Ginnheim': [
    'Frankfurt-Ginnheim',
	'Ginnheim',
  ],
  'Frankfurt am Main Sindlingen': [
    'Frankfurt-Sindlingen',
	'Sindlingen',
  ],
   'Frankfurt am Main Messe': [
    'Frankfurt Messe',
	'Messe',
  ],
  'Frankfurt am Main Stadion': [
    'Frankfurt Stadion',
	'Stadion',
  ],
  'Frankfurt am Main West': [
    'Frankfurt West',
  ],
  'Frankfurt Frankfurter Berg': [
    'Frankfurter Berg',
  ],
  'Frankfurt Hauptwache': [
    'Hauptwache',
  ],
  '': [
    '',
  ],




  
  
  
  
  
  
  
  
  
  
  
  
  
}
