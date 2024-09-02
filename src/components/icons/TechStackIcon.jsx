import {
  SiReact,
  SiExpo,
  SiSqlite,
  SiNodedotjs,
} from '@icons-pack/react-simple-icons';

const TechStackIcon = (props) => {
  const { iconName, className } = props;

  switch (iconName) {
    case 'React':
      return <SiReact title='React brand icon' className={`${className}`} />;
    case 'React Native':
      return <SiReact title='React brand icon' className={`${className}`} />;
    case 'Node JS':
      return (
        <SiNodedotjs title='Node brand JS icon' className={`${className}`} />
      );
    case 'SQLite':
      return <SiSqlite title='SQLite brand icon' className={`${className}`} />;
    case 'Expo':
      return <SiExpo title='Expo brand icon' className={`${className}`} />;
  }
};

export default TechStackIcon;
