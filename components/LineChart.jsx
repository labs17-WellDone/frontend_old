import { ResponsiveLine } from '@nivo/line';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
let data = [
  {
    id: 'japan',
    color: 'hsl(291, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 179
      },
      {
        x: 'helicopter',
        y: 183
      },
      {
        x: 'boat',
        y: 218
      },
      {
        x: 'train',
        y: 171
      },
      {
        x: 'subway',
        y: 242
      },
      {
        x: 'bus',
        y: 54
      },
      {
        x: 'car',
        y: 119
      },
      {
        x: 'moto',
        y: 122
      },
      {
        x: 'bicycle',
        y: 226
      },
      {
        x: 'horse',
        y: 52
      },
      {
        x: 'skateboard',
        y: 35
      },
      {
        x: 'others',
        y: 295
      }
    ]
  },
  {
    id: 'france',
    color: 'hsl(87, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 166
      },
      {
        x: 'helicopter',
        y: 279
      },
      {
        x: 'boat',
        y: 184
      },
      {
        x: 'train',
        y: 160
      },
      {
        x: 'subway',
        y: 38
      },
      {
        x: 'bus',
        y: 208
      },
      {
        x: 'car',
        y: 50
      },
      {
        x: 'moto',
        y: 171
      },
      {
        x: 'bicycle',
        y: 7
      },
      {
        x: 'horse',
        y: 99
      },
      {
        x: 'skateboard',
        y: 290
      },
      {
        x: 'others',
        y: 53
      }
    ]
  },
  {
    id: 'us',
    color: 'hsl(117, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 174
      },
      {
        x: 'helicopter',
        y: 56
      },
      {
        x: 'boat',
        y: 273
      },
      {
        x: 'train',
        y: 206
      },
      {
        x: 'subway',
        y: 54
      },
      {
        x: 'bus',
        y: 131
      },
      {
        x: 'car',
        y: 209
      },
      {
        x: 'moto',
        y: 73
      },
      {
        x: 'bicycle',
        y: 220
      },
      {
        x: 'horse',
        y: 179
      },
      {
        x: 'skateboard',
        y: 258
      },
      {
        x: 'others',
        y: 248
      }
    ]
  },
  {
    id: 'germany',
    color: 'hsl(317, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 205
      },
      {
        x: 'helicopter',
        y: 284
      },
      {
        x: 'boat',
        y: 296
      },
      {
        x: 'train',
        y: 38
      },
      {
        x: 'subway',
        y: 1
      },
      {
        x: 'bus',
        y: 110
      },
      {
        x: 'car',
        y: 121
      },
      {
        x: 'moto',
        y: 137
      },
      {
        x: 'bicycle',
        y: 13
      },
      {
        x: 'horse',
        y: 106
      },
      {
        x: 'skateboard',
        y: 229
      },
      {
        x: 'others',
        y: 249
      }
    ]
  },
  {
    id: 'norway',
    color: 'hsl(309, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 69
      },
      {
        x: 'helicopter',
        y: 109
      },
      {
        x: 'boat',
        y: 121
      },
      {
        x: 'train',
        y: 220
      },
      {
        x: 'subway',
        y: 282
      },
      {
        x: 'bus',
        y: 282
      },
      {
        x: 'car',
        y: 192
      },
      {
        x: 'moto',
        y: 5
      },
      {
        x: 'bicycle',
        y: 213
      },
      {
        x: 'horse',
        y: 176
      },
      {
        x: 'skateboard',
        y: 300
      },
      {
        x: 'others',
        y: 6
      }
    ]
  }
];

export const LineChart = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle'
    }}
    colors={{ scheme: 'nivo' }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="y"
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);
