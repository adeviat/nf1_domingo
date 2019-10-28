create database domingo;

drop table if exists user;
create table user
(
    id               integer      not null primary key auto_increment,
    name             varchar(255) not null,
    surname          varchar(255) not null,
    phonenumber      integer      not null,
    email            varchar(255) not null,
    current_location varchar(255) not null
);

drop table if exists orders;
create table orders
(
    id               integer      not null primary key auto_increment,
    timestamp        timestamp  not null,
    order_status     boolean not null,
    is_paid          boolean not null,
    user_raiting     integer not null,
    user_id          integer      not null,
    CONSTRAINT FOREIGN KEY (user_id) REFERENCES user (id)
);

drop table if exists payment_methods;
create table payment_methods
(
    id               integer      not null primary key auto_increment,
    payment_method   varchar(255)  not null,
    user_rating      integer not null,
    user_id          integer not null,
    CONSTRAINT FOREIGN KEY (user_id) REFERENCES user (id)
);

drop table if exists store;
create table store
(
    id                  integer      not null primary key auto_increment,
    name                varchar(255)  not null,
    location          varchar(16) not null,
    category                  varchar(255) not null,
    subcategory_id                 varchar(255) not null

);

drop table if exists products;
create table products
(
    id                  integer      not null primary key auto_increment,
    name                varchar(255)  not null,
    description          varchar(16) not null,
    price                  varchar(255) not null,
    photo                   varchar(255) not null,
    store_id              integer not null,
    CONSTRAINT FOREIGN KEY (store_id) REFERENCES products (id)
);


drop table if exists orders_products;
create table orders_products
(
    payment_methods_id    integer      not null primary key auto_increment,
    products_id           integer not null,
    CONSTRAINT FOREIGN KEY (products_id) REFERENCES products (id),
    CONSTRAINT FOREIGN KEY (payment_methods_id) REFERENCES payment_methods (id)
);
