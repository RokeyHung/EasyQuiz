const products = [
    {
        id: 1,
        name: '[Mã FAMARAL2 giảm 10K đơn 50K] Balo ulzzang chống nước Hàn Quốc F5B07',
        image: 'https://cf.shopee.vn/file/fb145f41404513264c1d6099fa48b157_tn',
        priceOld: 450000,
        AmountSales: 900,
        Brand: 'Ohui',
        Country: 'Hàn Quốc',
        SaleOff: 20
    },
    {
        id: 2,
        name: 'Dây Chuyền Bạc 925 Hanada Vòng Cổ Một Đá Sáng Đơn Giản',
        image: 'https://cf.shopee.vn/file/01bc507a93f63299aeb3d8006197f600_tn',
        priceOld: 240000,
        AmountSales: 899,
        Brand: 'Hanada',
        Country: 'Việt Nam',
        SaleOff: 51
    },
    {
        id: 3,
        name: 'Áo thun nữ tay lỡ form rộng unsiex nam nữ mặc được màu hồng thêu cánh tiên siêu cute Xưởng sỉ nguyễn hoa',
        image: 'https://cf.shopee.vn/file/7cea5c27586361d3f0ba22922726c63f_tn',
        priceOld: 345000,
        AmountSales: 80,
        Brand: 'TSIMPLE',
        Country: 'Việt Nam',
        SaleOff: 17
    },
    {
        id: 4,
        name: '[Mã FAMARAL2 giảm 10K đơn 50K] Áo gile ĐEN unisex form rộng in logo kèm áo phông trắng -GL012',
        image: 'https://cf.shopee.vn/file/b3a3faf7010ddd2d2837e7d73be9636d',
        priceOld: 90000,
        AmountSales: 2000,
        Brand: 'AKUBA',
        Country: 'Việt Nam',
        SaleOff: 25
    },
    {
        id: 5,
        name: '[Mã FAMARAL2 giảm 10K đơn 50K] Đầm Trắng nữ,Set váy nơ cổ dáng xòe tiểu thư tôn dáng xinh xịn mịn',
        image: 'https://cf.shopee.vn/file/ba575de8a6b24d31ff20cc3ed83830f2',
        priceOld: 120000,
        AmountSales: 2300,
        Brand: 'nahanystore',
        Country: 'Việt Nam',
        SaleOff: 40
    },
    {
        id: 6,
        name: '[Mã FAMARAL2 giảm 10K đơn 50K] [Quà tặng viên kẹo] Váy trắng nữ,đầm trễ vai tay voan bánh bèo HD7',
        image: 'https://cf.shopee.vn/file/496766e027903d5315aa7ad6b486d32f',
        priceOld: 150000,
        AmountSales: 4000,
        Brand: '1ststory',
        Country: 'Việt Nam',
        SaleOff: 55
    },
    {
        id: 7,
        name: 'Áo sơ mi tay bồng cổ nơ khuy ngọc tiểu thư 2 lớp mặc tết, đi làm cực xinh SM STORE A01',
        image: 'https://cf.shopee.vn/file/32401b8466c48b5a29356b05cb3e3795',
        priceOld: 150000,
        AmountSales: 566,
        Brand: 'chew_berry',
        Country: 'Việt Nam',
        SaleOff: 27
    },
    {
        id: 8,
        name: 'Áo phông tay lỡ SECU unisex - Áo cộc tay dáng suông , oversize in hình nổi bật, họa tiết cá tính',
        image: 'https://cf.shopee.vn/file/a24b514be5a49e83c4c42d99f7937073',
        priceOld: 140000,
        AmountSales: 957,
        Brand: 'wedofashion2021',
        Country: 'Việt Nam',
        SaleOff: 18
    },
    {
        id: 9,
        name: '[Mã FAMARAL2 giảm 10K đơn 50K] Áo Blazer Nam Dài, Áo khoác Blazer Form Rộng FANANO phong cách Hàn Quốc AD006',
        image: 'https://cf.shopee.vn/file/cbfcef680c2ddbe3b32f5128c5ef1746',
        priceOld: 380000,
        AmountSales: 3600,
        Brand: 'wedofashion2021',
        Country: 'Việt Nam',
        SaleOff: 38
    },
    {
        id: 10,
        name: 'Váy Trễ Vai Bánh Bèo Tay bồng🎀 Đầm Dự Tiệc rớt Vai Màu Trắng🎀Áo lệch vai dài tay tiểu thư 2 lớp vintage',
        image: 'https://cf.shopee.vn/file/d7f80d74b4fbdbfa543e0e5147410ef5',
        priceOld: 280000,
        AmountSales: 2200,
        Brand: 'nasu_may',
        Country: 'Việt Nam',
        SaleOff: 12
    },
    {
        id: 11,
        name: 'Áo sơ mi cổ vest dài tay form rộng unisex phong cách trẻ trung, chất liệu vải lụa hàn chống nhăn',
        image: 'https://cf.shopee.vn/file/b1037c87f63cce50a69e729904bf85c5',
        priceOld: 190000,
        AmountSales: 48,
        Brand: 'hottrend365',
        Country: 'Việt Nam',
        SaleOff: 46
    },
    {
        id: 12,
        name: 'Áo gile nam kẻ sọc nhiều màu. (Vải xịn 2 lớp)',
        image: 'https://cf.shopee.vn/file/c53cef75ad36f7589036b41aa716ab98',
        priceOld: 430000,
        AmountSales: 15,
        Brand: 'Zero Sports',
        Country: 'Việt Nam',
        SaleOff: 40
    },
    {
        id: 13,
        name: '[BIG SALE] Bộ quần và áo vest mẫu 2 khuy (2 cúc) màu xanh than và đen, bộ vét nam, vét chú rể, bộ comle 2 cúc. Sale 70%',
        image: 'https://cf.shopee.vn/file/d2f313c5e1b6d41014db57683f4430bc',
        priceOld: 779000,
        AmountSales: 171,
        Brand: 'teelab_official',
        Country: 'Việt Nam',
        SaleOff: 44
    },
    {
        id: 14,
        name: '[Mã FAMARAL2 giảm 10K đơn 50K] Áo crotop trễ vai bánh bèo tiểu thư, áo trắng trần trễ vai màu trắng điệu đà',
        image: 'https://cf.shopee.vn/file/c0d9b9d3f0fa53f98b7b631ce27792f4',
        priceOld: 110000,
        AmountSales: 1300,
        Brand: 'shaclow4.shop',
        Country: 'Việt Nam',
        SaleOff: 45
    },
    {
        id: 15,
        name: 'Chân váy xếp ly Tennis có quần trong cạp cao dáng xòe - Chân váy tennis xếp ly ngắn vải dày mềm học sinh đi biển công sở',
        image: 'https://cf.shopee.vn/file/6ee3658a7e2f2cbd6ce182928da3ec70',
        priceOld: 126000,
        AmountSales: 1500,
        Brand: 'phuongmaibags',
        Country: 'Việt Nam',
        SaleOff: 50
    }
]