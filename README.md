# ZIGZAG_SERVER

## BaseURL : 18.217.241.233:5000

### 서비스 소개

`개발자` : 권세훈, 김서현<br>
`서비스 이름` : 지그재그<br>

### 서버 파트원

| 이름     |               역할                | 비고 |
| -------- | :-------------------------------: | :--: |
| `권세훈` | `EC2, S3 연결`, `메인뷰 API 담당` |      |
| `김서현` |        `스토어뷰 API 담당`        |      |

### Models

- /models/Banner.ts

```typescript
import mongoose from "mongoose";
import { IBanner } from "../interfaces/IBanner";

const BannerSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  banner_idx: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IBanner & mongoose.Document>(
  "Banner",
  BannerSchema
);
```

- /models/Item.ts

```typescript
import mongoose from "mongoose";
import { IItem } from "../interfaces/IItem";

const ItemSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  item_idx: {
    type: Number,
    required: true,
  },
  brand_name: {
    type: String,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount_idx: {
    type: Number,
    required: true,
  },
  delivery_idx: {
    type: Number,
    required: true,
  },
  delivery_today: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model<IItem & mongoose.Document>("Item", ItemSchema);
```

- /models/Store.ts

```typescript
import mongoose from "mongoose";
import { IStore } from "../interfaces/IStore";

const StoreSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  store_idx: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  coupon: {
    type: Number,
    required: false,
  },
  bookmark: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IStore & mongoose.Document>("Store", StoreSchema);
```

- /models/Story.ts

```typescript
import mongoose from "mongoose";
import { IStory } from "../interfaces/IStory";

const StorySchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  story_idx: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  view: {
    type: Number,
    required: false,
  },
});

export default mongoose.model<IStory & mongoose.Document>("Story", StorySchema);
```

### interfaces

- /interfaces/IBanner.ts

```typescript
import mongoose from "mongoose";

export interface IBanner {
  _id?: string;
  img: string;
  banner_idx: number;
}
```

- /interfaces/IItem.ts

```typescript
import mongoose from "mongoose";

export interface IStory {
  _id?: string;
  img: string;
  story_idx: number;
  brand: string;
  view: number;
}
```

- /interfaces/IStore.ts

```typescript
import mongoose from "mongoose";

export interface IStore {
  _id?: string;
  img: string;
  store_idx: number;
  brand: string;
  style: string;
  coupon: number;
  bookmark: boolean;
}
```

- /interfaces/IStory.ts

```typescript
import mongoose from "mongoose";

export interface IStory {
  _id?: string;
  img: string;
  story_idx: number;
  brand: string;
  view: number;
}
```

### API 명세서

- ##### [API 명세서](https://github.com/SOPT-ZigZag/SERVER_ZIGZAG/wiki)
