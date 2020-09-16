# datemath

datemath parser.

## Usage

```
npm install @chatopera/datemath
```

usage:

```
const {parse} = require("@chatopera/datemath")
let now = parse("now")
// now is moment date object.
```

cli: timestamp STR [TIMEZONE]

For example: `timestamp now Asia/Shanghai`

## Learn more about date math syntax

https://stackoverflow.com/questions/27152490/elasticsearch-date-range-get-yesterday

https://www.elastic.co/guide/en/elasticsearch/reference/6.5/common-options.html#date-math

## Other tools:

Convert timestamp, https://www.unixtimestamp.com/index.php

Get world timezone map, https://momentjs.com/timezone/

## Borrow code from

**Deprecated**: This library is deprecated in favour of https://github.com/elastic/kibana/tree/master/packages/elastic-datemath. See https://github.com/elastic/kibana/tree/master/packages for details on how to use Kibana specific packages.

Datemath string parser used in Kibana

## License

Copyright (2018-2020) <a href="https://www.chatopera.com/" target="_blank">北京华夏春松科技有限公司</a>

[Apache License Version 2.0](https://gitee.com/chatopera/cosin/blob/master/LICENSE)

[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://static-public.chatopera.com/assets/images/42383104-da925942-8168-11e8-8195-868d5fcec170.png
[co-url]: https://www.chatopera.com
