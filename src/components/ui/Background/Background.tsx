import backgroundImageAVIF from '../../../assets/images/background.avif';
import backgroundImageWEBP from '../../../assets/images/background.webp';
import backgroundImageJPG from '../../../assets/images/background.jpg';

const Background = (): JSX.Element => {
  return (
    <picture className="background">
      <source srcSet={backgroundImageAVIF} type="image/avif" />
      <source srcSet={backgroundImageWEBP} type="image/webp" />
      <img src={backgroundImageJPG} alt="" />
    </picture>
  );
};

export default Background;
