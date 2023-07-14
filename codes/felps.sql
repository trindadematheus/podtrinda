CREATE TABLE podtrinda_participants(
    id int auto_increment primary key,
    name varchar(255) not null,
    participe_date timestamp not null,
    position varchar(100),
    host varchar(255)
);


insert into podtrinda_participants (name, participe_date, position, host)
values ('Felipe || Felps', '2023-07-13', 'Tech Lead', 'Trindade, Matheus');



select
concat('Eu', name, ' Participei do podTrinda com o Host', host)
from podtrinda_participants
where id = 1;

