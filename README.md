<h3 align="center">NestJS + Mongo Test</h3>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
  </p>

## รายละเอียด
Nest Framework TypeScript

## การติดตั้ง
```bash
$ npm install 
```

## การ Ruท แอปพลิเคชัน
```bash
# Run
$ npm run start

# Run ผู้พัฒนาโหมด
$ npm run start:dev
```
## ออกแบบระบบร้านขายหนังสือ โดยมี Feature ดังนี้
```bash
[✔️] เพิ่ม/ลบ/แก้ไขข้อมูลสมาชิก
เพิ่ม POST URL: http://localhost:5555/users
ลบ DLETE URL: http://localhost:5555/users/{_id}
แก้ไข PUT URL: http://localhost:5555/users/{_id}

[✔️] แสดงรายการสมาชิก (สามารถ filter จาก ชื่อผู้ใช้งาน, ชื่อ-นามสกุล)
หาทั้งหมด GET URL: http://localhost:5555/users
หาจาก username หรือ ชื่อ GET URL: http://localhost:5555/users/{username or name}

[✔️] สามารถระงับการใช้งานของสมาชิกได้

[ ] รายงานสมาชิกใหม่

[✔️] สมาชิกสามารถ login ได้ด้วย ชื่อผู้ใช้งาน (login ผิดพลาด 3 ครั้งจะถูกระงับ 30 วินาที)

[ ] สมาชิกสามารถซื้อหนังสือได้

[ ] ประวัติการซื้อหนังสือของสมาชิก

[ ] รายงานการขายหนังสือที่ถูกขายในแต่หมวดหมู่, หมวดหมู่ละกี่เล่ม มีเรื่องออะไรบ้าง ราคาเท่าไหร่

[✔️] เพิ่ม/ลบ/แก้ไขข้อมูลหนังสือ (default: จำนวนหนังสือที่เพิ่มใหม่ 10 เล่ม)
เพิ่ม POST URL: http://localhost:5555/books
ลบ DLETE URL: http://localhost:5555/books/{_id}
แก้ไข PUT URL: http://localhost:5555/books/{_id}

[✔️] แสดงรายการหนังสือ (สามารถ filter จาก ชื่อหนังสือ, เรียงลำดับจากจำนวนหนังสือ, ราคา)
หาทั้งหมด GET URL: http://localhost:5555/books
หาจากชื่อหนังสือ GET URL: http://localhost:5555/books/{bookname}

[ ] สมาชิกที่ถูกระงับจะไม่สามารถซื้อหนังสือ
```
## Edit By
```bash
KanSaz
```
