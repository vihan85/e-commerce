import MainLayout from '../components/layout/main-layout';
import HomePage from '../components/pages/home-page';

export default function Home({ getData }) {
    return (
        <div>
            <MainLayout>
                <HomePage />
            </MainLayout>
        </div>
    );
}
