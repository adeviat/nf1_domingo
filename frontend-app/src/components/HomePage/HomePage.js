import React from 'react';
import './HomePage.css';
import './bootstrap.min.css';
import HomePageTopMenu from '../HomePageTopMenu/HomePageTopMenu';
import HomePageMainBlock from "../HomePageMainBlock/HomePageMainBlock";


function HomePage() {
    return (
        <div>
            <HomePageTopMenu/>
            <HomePageMainBlock/>
            {/* TODO: A PARTIR DE AQUI ES TRABAJO PENDIENTE, LO IRË MEJORANDO Y DIVIDIENDO EN COMPONENTES */}
            <section class="container">
                <div class="row">
                    <h2>Trending highlights in your town</h2>
                </div>
                <div class="row">
                    <div class="card-deck">
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            {/* imagen del movil */}
                        </div>
                        <div class="col">
                            {/* texto y botones */}
                        </div>
                    </div>
                </div>
            </section>

            <section class="container">
                <div class="row d-flex d-md-none">
                    Glovobusiness para mobile
                </div>
                <div class="row d-none d-md-flex">
                    Glovobusiness para desktop
                </div>
            </section>

            <section class="container">
                <div class="row">
                    <h2>We're building Glovo together!</h2>
                </div>
                <div class="row">
                    <div class="card-deck">
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <div class="card">
                                <img src="..." class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a
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
                    crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                    crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                    crossorigin="anonymous"></script>
        </div>
    );
}
export default HomePage;