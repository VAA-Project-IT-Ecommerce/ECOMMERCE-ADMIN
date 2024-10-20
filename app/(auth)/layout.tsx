import IconCloud from "@/components/ui/icon-cloud";
const slugs = [
  "nike",
  "adidas",
  "gucci",
  "prada",
  "apple",
  "samsung",
  "tesla",
  "amazon",
  "microsoft",
  "chanel",
  "puma",
  "louisvuitton",
  "sony",
  "hermes",
  "burberry",
  "ralphlauren",
  "versace",
  "balenciaga",
  "vans",
  "theNorthFace",
  "lacoste",
  "underarmour",
  "tommyhilfiger",
  "mclaren",
  "bose",
  "coach",
  "ferrari",
  "dior",
  "valentino",
  "tiffanyandco",
  "cartier",
  "rolex",
  "swarovski",
  "balmain",
  "mango",
  "zara",
  "uniqlo",
  "h&m",
  "stradivarius",
  "bershka",
  "asos",
  "nordstrom",
  "lululemon",
  "urbanoutfitters",
  "americanEagle",
  "gap",
  "victoriassecret",
  "forever21",
  "rebook",
  "converse",
  "newbalance",
  "timberland",
  "docmartens",
  "skechers",
  "crocs",
  "levis",
  "wrangler",
  "carhartt",
  "dockers",
  "polo",
  "spalding",
  "wilson",
  "oakley",
  "rayban",
  "persol",
  "fendi",
  "cartier",
  "hublot",
  "tagheuer",
  "omega",
  "seiko",
  "sennheiser",
  "bose",
  "beats",
  "marshall",
  "harmankardon",
  "lacie",
  "sandisk",
  "gopro",
  "nintendo",
  "playstation",
  "xbox",
  "razer",
  "logitech",
  "steelseries",
  "corsair",
  "benq",
  "asus",
  "dell",
  "lenovo",
  "hp",
  "acer",
  "huawei",
  "xiaomi",
  "oneplus",
  "sony",
  "anker",
  "seagate",
  "kingston",
  "wd",
  "netgear",
  "tplink",
  "ibm",
  "oracle",
  "salesforce",
  "zoom",
  "slack",
  "atlassian",
  "jira",
  "gitlab",
  "ebay",
  "etsy",
  "shopify",
  "alibaba",
  "lazada",
  "shopee",
  "mercadolibre",
  "walmart",
  "bestbuy",
  "target",
  "costco",
  "asos",
  "boohoo",
  "prettyLittleThing",
  "shein",
  "modcloth",
  "zappos",
  "nordstromrack",
  "macy",
  "jcpenny",
  "saksfifthavenue",
  "neimanmarcus",
  "bloomingdales",
  "urbanoutfitters",
  "revolve",
  "farfetch",
  "netaporter",
  "matchesfashion",
  "mytheresa",
  "ssense",
  "endclothing",
  "selfridges",
  "jomashop",
  "ssense",
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      {/* Phần trái: Hình ảnh và nội dung */}
      <div className="lg:flex-1 bg-gradient-to-r from-blue-100 to-green-100 p-10 flex items-center justify-center">
        <div className="text-center">
          <IconCloud iconSlugs={slugs} />
          <h1 className="text-xl lg:text-4xl font-bold text-black mb-4">
            Đăng Nhập Để Trải Nghiệm Mua Sắm Tốt Nhất
          </h1>
        </div>
      </div>

      {/* Phần phải: Form đăng nhập (children) */}
      <div className="lg:flex-1 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
          {children}
        </div>
      </div>

      {/* Phần mô tả dưới (ẩn trên màn hình lớn và hiện trên màn hình nhỏ) */}
      <div className="lg:hidden bg-gray-100 p-6 text-center w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Tại sao nên chọn chúng tôi?
        </h2>
        <p className="text-gray-600">
          Chúng tôi mang đến trải nghiệm mua sắm nhanh chóng, tiện lợi với hàng
          ngàn sản phẩm chất lượng từ khắp nơi. Đăng ký và khám phá những ưu đãi
          độc quyền ngay hôm nay!
        </p>
      </div>
    </div>
  );
}
