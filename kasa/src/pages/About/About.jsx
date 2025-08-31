import Banner from "../../components/Banner/Banner";
import aboutBannerImg from '../../assets/MontainAbout.png';
import { AboutData } from "../../data/AboutData";
import Collapse from "../../components/Collapse/Collapse";
import CollapseContent from "../../components/CollapseContent/CollapseContent";
import styles from './About.module.scss';

const About = () => {
  return (
    <>
      <Banner 
        image={aboutBannerImg}
        alt='Montagnes'
        className={styles.aboutBanner}
        imgClassName={styles.aboutBannerImg}
      />
      <div className={styles.container}>
        {AboutData.map(({title, description}) => (
        <Collapse 
          key={title}
          title={title}>
          <CollapseContent description={description}/>
        </Collapse>
      ))}
      </div>
    </>
  )
}

export default About
