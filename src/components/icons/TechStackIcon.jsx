import {
  SiReact,
  SiExpo,
  SiSqlite,
  SiNodedotjs,
  SiTailwindcss,
  SiOpenai,
  SiAdobe,
  SiHono,
  SiJavascript,
  SiTypescript
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
    case 'Tailwind CSS':
      return <SiTailwindcss title='Tailwind CSS brand icon' className={`${className}`} />
    case 'OpenAI API':
      return <SiOpenai title='OpenAI brand icon' className={`${className}`} />;
    case 'AdobePDF API':
      return <SiAdobe title='Adobe brand icon' className={`${className}`} />
    case 'Hono':
      return <SiHono title='Hono brand icon' className={`${className}`} />
    case 'Javascript':
      return <SiJavascript title='Javascript brand icon' className={`${className}`} />
    case 'Typescript':
      return <SiTypescript title='Typescript brand icon' className={`${className}`} />
  }
};

export default TechStackIcon;
