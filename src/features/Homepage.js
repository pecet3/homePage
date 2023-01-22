import { List } from '../common/List';
import { Portfolio } from './Portfolio';
import { Header } from './Header';
import { Footer } from './Footer';
import { listContent } from '../common/List/content';
import { nanoid } from 'nanoid';
import { HomepageWrapper } from './styled';
import { Error } from '../common/Error';

function Homepage() {
  return (
    <>
      <HomepageWrapper>
        <Header />
        {listContent.map(({ content, icon, title }) => (
          <List
            title={title}
            list={content}
            icon={icon}
            key={nanoid()}
          />
        ))}
        <Portfolio />
        <Error />
        <Footer />
      </HomepageWrapper>
    </>
  );
}

export default Homepage;
