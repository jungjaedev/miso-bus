import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/miso_logo.svg", "public/images/misobus/miso_logo.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/logo.svg", "public/images/misobus/logo.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/card1.png", "public/images/misobus/card1.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/card2a.png", "public/images/misobus/card2a.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/card3.png", "public/images/misobus/card3.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/li_tour.png", "public/images/misobus/li_tour.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/li_wedding.png", "public/images/misobus/li_wedding.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/li_mountain.png", "public/images/misobus/li_mountain.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/li_workshop.png", "public/images/misobus/li_workshop.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/li_group.png", "public/images/misobus/li_group.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/li_etc.png", "public/images/misobus/li_etc.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_main_img.jpg", "public/images/misobus/bus_main_img.jpg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_main_img_m.jpg", "public/images/misobus/bus_main_img_m.jpg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_kakaotalk_222.svg", "public/images/misobus/icon_kakaotalk_222.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bnt_call.svg", "public/images/misobus/bnt_call.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/i_question.svg", "public/images/misobus/i_question.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/i_chats.svg", "public/images/misobus/i_chats.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/i_calendar.svg", "public/images/misobus/i_calendar.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/i_bus.svg", "public/images/misobus/i_bus.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/notice_icon.svg", "public/images/misobus/notice_icon.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/plus_222.svg", "public/images/misobus/plus_222.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_kakaotalk_color.svg", "public/images/misobus/icon_kakaotalk_color.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_call_color.svg", "public/images/misobus/icon_call_color.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_calculator_color.svg", "public/images/misobus/icon_calculator_color.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/x_close.svg", "public/images/misobus/x_close.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_inquiry.svg", "public/images/misobus/icon_inquiry.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_kakaotalk.svg", "public/images/misobus/icon_kakaotalk.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_instagram.svg", "public/images/misobus/icon_instagram.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_instagram_222.svg", "public/images/misobus/icon_instagram_222.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_blog.svg", "public/images/misobus/icon_blog.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_blog_black.svg", "public/images/misobus/icon_blog_black.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/i_arrow.svg", "public/images/misobus/i_arrow.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_11.jpg", "public/images/misobus/bus_11.jpg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_16.jpg", "public/images/misobus/bus_16.jpg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_28.jpg", "public/images/misobus/bus_28.jpg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_seat_11.svg", "public/images/misobus/bus_seat_11.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_seat_28.svg", "public/images/misobus/bus_seat_28.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_seat_45.svg", "public/images/misobus/bus_seat_45.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_seat_m16.svg", "public/images/misobus/bus_seat_m16.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/bus_seat_m25.svg", "public/images/misobus/bus_seat_m25.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/etc_bus.svg", "public/images/misobus/etc_bus.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/etc_car.svg", "public/images/misobus/etc_car.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_call.svg", "public/images/misobus/icon_call.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_talk.svg", "public/images/misobus/icon_talk.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/icon_estimate.svg", "public/images/misobus/icon_estimate.svg"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/ci/favicon-32x32.png", "public/seo/favicon-32x32.png"],
  ["https://misobus.com/wp-content/themes/twentytwenty-child/img/ci/apple-icon-114x114.png", "public/seo/apple-icon-114x114.png"],
  ["https://misobus.com/wp-content/uploads/2021/08/miso_identity.jpg", "public/seo/miso_identity.jpg"],
];

async function download([url, filePath]) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, Buffer.from(await response.arrayBuffer()));
  return filePath;
}

const queue = [...assets];
const done = [];
const workers = Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const asset = queue.shift();
    if (asset) done.push(await download(asset));
  }
});

await Promise.all(workers);
console.log(`Downloaded ${done.length} assets`);
