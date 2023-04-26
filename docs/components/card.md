# Card

## How to use

```vue

import { Card } from 'thirdlib'

function yourFunc() {

  return (
    <div >
      <Card isShadow={false} border="double" bgColor="pink">
        <p>example children reactnode</p>
      </Card>
    </div>
  )
}

```

## Props

| prop    | type    | required | default | description        |
| ------- |---------| -------- |---------|--------------------|
| border | enum    |          | double  | double none simple |
| isShadow | boolean |          | true    |                    |
| bgColor | enum  |          | pink    | orange'  'amber'  'yellow'  'lime'  'teal'  'cyan'  'indigo'  'violet' 'pink' |

