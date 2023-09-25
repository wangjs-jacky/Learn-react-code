import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  console.log('name', name);

  return (
    <PageContainer ghost>
      <h1 style={{ color: 'red' }}>{name}</h1>
    </PageContainer>
  );
};

export default HomePage;
