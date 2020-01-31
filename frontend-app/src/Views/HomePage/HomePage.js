import React from 'react';
import './HomePage.css';
import './bootstrap.min.css';
import HomePageTopMenu from '../../components/HomePageTopMenu/HomePageTopMenu';
import HomePageMainBlock from "./HomePageMainBlock/HomePageMainBlock";


function HomePage() {
    return (
        <div>
            <HomePageTopMenu/>
            <HomePageMainBlock/>
            {/* TODO: A PARTIR DE AQUI ES TRABAJO PENDIENTE, LO IRË MEJORANDO Y DIVIDIENDO EN COMPONENTES */}
            <section className="container">
                <div className="row">
                    <h2>Trending highlights in your town</h2>
                </div>
                <div className="row">
                    <div className="card-deck">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* imagen del movil */}
                        </div>
                        <div className="col">
                            {/* texto y botones */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row d-flex d-md-none">
                    Glovobusiness para mobile
                </div>
                <div className="row d-none d-md-flex">
                    Glovobusiness para desktop
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <h2>We're building Glovo together!</h2>
                </div>
                <div className="row">
                    <div className="card-deck">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* bootstrap scripts */}
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                    crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                    crossOrigin="anonymous"></script>
        </div>
    );
}
export default HomePage;