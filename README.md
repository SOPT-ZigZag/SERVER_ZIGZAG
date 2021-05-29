# ZIGZAG_SERVER

## BaseURL : 18.217.241.233:5000

### 서비스 소개
`개발자` : 권세훈, 김서현<br>
`서비스 이름` : 지그재그<br>

### 서버 파트원

| 이름     |      역할      | 비고 |
| -------- | :------------: | :--: |
| `권세훈` | `EC2, S3 연결` |      |
| `김서현` |                |      |

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
  bannerIdx: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IBanner & mongoose.Document>(
  "Banner",
  BannerSchema
);
```

### interfaces

- /interfaces/IBanner.ts

```typescript
import mongoose from "mongoose";

export interface IBanner {
  _id?: string;
  img: string;
  bannerIdx: number;
}
```

### API 명세서

- ##### [API 명세서](https://github.com/SOPT-ZigZag/SERVER_ZIGZAG/wiki)
