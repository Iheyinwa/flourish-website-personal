import PropTypes from "prop-types";

const ChurchCard = ({ imageSrc, title, socialLinks }) => (
  <div className="flex flex-col gap-[26px] w-full bg-white rounded-[20px] leading-[93%] pt-[12px] pb-[29px] px-[12px] h-full">
    <img
      src={imageSrc}
      alt={title}
      className="w-full aspect-[0.83] rounded-[14px]"
    />
    <div className="flex flex-col px-5 gap-[20px]">
      <h2 className="text-lg md:text-[24px] tracking-[-1%] leading-[93%] font-stemBold">
        {title}
      </h2>
      <div className="flex gap-[5.69px] items-center flex-wrap">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="justify-center flex items-center text-sm tracking-[-0.5%] leading-[93%] font-stemRegular font-medium text-[#b1b1b1] rounded-[23.08px] h-[34px] w-fit border-[0.7px] p-[12px] border-solid border-[#b1b1b1]"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </div>
);

ChurchCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  socialLinks: PropTypes.arrayOf("string"),
};

export default function BlogsSection() {
  const churches = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
      title: "The Ecclessia (The Church)",
      socialLinks: [
        { name: "Whatsapp", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
      title: "The Ecclessia (The Church)",
      socialLinks: [
        { name: "Whatsapp", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
      title: "The Ecclessia (The Church)",
      socialLinks: [
        { name: "Whatsapp", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
      title: "The Ecclessia (The Church)",
      socialLinks: [
        { name: "Whatsapp", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
      title: "The Ecclessia (The Church)",
      socialLinks: [
        { name: "Whatsapp", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ab744554eaa97c4c7bf69969cb6ec8a6f97aba1192ad3b24c7287ae582c5c77d?apiKey=873e47fe7796454e93671642132d9742&",
      title: "The Ecclessia (The Church)",
      socialLinks: [
        { name: "Whatsapp", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
  ];

  return (
    <main className="flex flex-col px-[20px] min-[500px]:px-[30px] md:px-[80px] xl:px-[150px] pb-[150px]">
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-[20px] min-[600px]:gap-[30px] md:gap-[40px] justify-between items-center">
        {churches.map((church, index) => (
          <div key={index}>
            <ChurchCard
              imageSrc={church.imageSrc}
              title={church.title}
              socialLinks={church.socialLinks}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
