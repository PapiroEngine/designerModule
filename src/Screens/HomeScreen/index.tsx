import React from 'react'
import { Sidebar } from './../components/Sidebar/Sidebar'
import { GameCard } from './../components/GameCard/GameCard'
import { IGameCard } from '../components/GameCard/interfaces/IGameCard'
import { NewReleaseBar } from '../components/NewReleaseBar/NewReleaseBar'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles.scss'


const HomeScreen: React.FC = () => {
    const arrayGameCards = [
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        },
        {
            imgUrl: 'https://source.unsplash.com/random',
            title: 'Card title',
            content: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
        }
    ]

    return (
        <div className="container-fluid bg-surface min-vh-100">
            <div className="row">
                <div className="col bg-surface min-vh-100">
                    <Sidebar />
                </div>

                <div className="col-7 d-flex flex-column">
                    <div className="row flex-row justify-align-content-between w-100">
                        <div className="col d-flex flex-row justify-content-start p-0">
                            <h3>Your Games</h3>
                        </div>
                        <div className="col d-flex flex-row justify-content-end p-0">
                            <button className="btn btn-primary">
                                Add Game
                            </button>
                        </div>
                    </div>
                    <div className="row flex-row flex-wrap w-100">
                        {
                            arrayGameCards.map((card: IGameCard) =>
                                <GameCard
                                    imgUrl="https://images.unsplash.com/photo-1634745687108-c1b946a4852d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                    title={card.title}
                                // content={card.content}
                                />
                            )
                        }
                    </div>
                </div>

                <div className="col-3 bg-surface sticky-top min-vh-100 p-1">
                    <NewReleaseBar/>
                </div>
            </div>
        </div>
    );
}

export { HomeScreen };