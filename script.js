var places = ['樂樂庵之合掌日式居酒屋', '劉江便當 (林森本店)', '廣合涼麵', '純發西點麵包', '不老壽司五福店', '菜粽李粽店', '正牌白糖粿', '國民特色滷味', '大韓民國韓式家常料理', '燒肉飯', '華喜爌肉飯', '崔記小餐館（港式料理）', '滿溢本舖 復興總店-手工豆花 甜品店', '碰心蘿蔔《每週一固定公休 每月多休日請參考粉絲頁公休表》', '極品豚骨拉麵', '日一食堂', '花葵壽喜', '北平楊寶寶蒸餃旗艦店', '仁武烤鴨', '阿石北平烤鴨店', '百仕炭火脆皮烤鴨', '下一鍋水煎包', '萬丹紅豆餅', '南明肉燥飯(自強總店)', '牛老二牛肉麵館-興中本店(本店將於2023年12月6日起暫停營業，進行內部整修。)', '藏寶丼-文橫店-苓雅日式丼飯|外帶丼飯|人氣丼飯|外帶美食|平價丼飯|必吃餐廳', '宏美冰果店', '金國排骨', '老人牌鴨肉飯', '圓知圓味', '所長茶葉蛋 (瑞隆店)', '龍小二點心工坊', '小盛豐湯包', '株式串社 串燒', '鄧家粉圓', '愛玉冰', '三塊厝鴨肉飯', '鴨肉和', '七賢鴨肉飯專賣店', '金城鴨肉専門店', '小南碗粿', '厚得福湯包麵食專賣店', '老二腿庫飯', '溫の暖湯-苓雅總店 麻辣鍋|酸辣粉', '嘉輝燒肉飯', '正義蚵仔麵線 （苓雅店）。近期店休日：11/12（日）,11/26（日）', '高雄苓雅油煎肉圓', '夜上海(排骨飯、雞腿飯)', '苓雅市場阿珠煎餃', '苓雅市場廟口蚵仔煎', '屏東肉圓', '苓雅牛排', '南豐魯肉飯/苓雅夜市/高雄美食/夜市小吃/（御魯發最新品牌）', '老牌白糖粿', '阿明肉包興中店', '小小麥-高雄中山（沒有訂位，沒有訂位，沒有訂位）', '初米黃燜雞', '天廚河粉-中山總店', '阿亮雞排', 'Soka壽司', '福德炸雞翅甘梅薯條', '王記牛肉麵-興中店', '阿海早餐店', '毅誠火雞肉飯', '孬味香菇肉羹', '萬里羊肉', '順和排骨大王 文橫店', '清蒸肉圓每粒12元（高雄在地四十多年老店）', '台南欽鱔魚麵', '東泰鮮泰式椒麻雞飯', 'Phở 大亨越南河粉日式咖哩飯', '壽司甜不辣（文橫店）', '美而美總匯漢堡專賣店', '素食麵攤', '興中一路與仁智街口腳筋飯']

let intervalId; // 用於存儲隨機顯示的定時器ID

// 獲取按鈕和結果元素
const randomFoodBtn = document.getElementById('randomFoodBtn');
const foodResult = document.getElementById('foodResult');
const foodPrefix = document.getElementById('foodPrefix');

// 點擊按鈕時觸發的函數
randomFoodBtn.addEventListener('click', () => {
    foodPrefix.textContent = `今天你可以吃：`
    // 清除之前的定時器
    clearInterval(intervalId);

    // 開始隨機顯示食物
    intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * places.length);
        const selectedFood = places[randomIndex];
        foodResult.textContent = selectedFood;
    }, 10); // 每0.2秒顯示一次隨機食物

    // 顯示選擇的食物
    setTimeout(() => {
        clearInterval(intervalId);
        const finalRandomIndex = Math.floor(Math.random() * places.length);
        const finalSelectedFood = places[finalRandomIndex];
        foodResult.textContent = finalSelectedFood;
    }, 3000);
});
