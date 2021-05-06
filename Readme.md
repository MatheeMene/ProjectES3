sudo docker pull mcr.microsoft.com/mssql/server:2019-latest

sudo docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=<YourStrong@Passw0rd>" \
-p 1433:1433 --name sql1 -h sql1 \
-d mcr.microsoft.com/mssql/server:2019-latest

**IMPORTANTE PARA NÓS EXECUTARMOS**
sudo docker exec -it sql1 "bash"
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "<YourStrong@Passw0rd>"

**COMANDOS USADOS PARA CRIAR A BASE DE DADOS**
CREATE DATABASE project

USE project

DROP TABLE IF EXISTS person; CREATE TABLE person (id INT NOT NULL IDENTITY PRIMARY KEY, name VARCHAR(50) NOT NULL, last_name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL, password VARCHAR(15) NOT NULL, person_type VARCHAR(15) NOT NULL, cpf VARCHAR(20) NOT NULL);