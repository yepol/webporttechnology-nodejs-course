# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

https://prnt.sc/HHMzqfbdf1FJ

# Отримуємо контакт по id
node index.js --action="get" --id=5

https://prnt.sc/mcEoRLA_IA_3

# Змінюємо контакт
node index.js --action="update" --id=5 --name="Cyrus Jackson Update" --email="update_nibh@semsempererat.com" --phone="(501) 111-1111"

https://prnt.sc/orXggwujpAoF

# Добавялем контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

https://prnt.sc/GmIRnxZhw4q4

# Видаляємо контакт
node index.js --action="remove" --id=3

https://prnt.sc/Lhp21G3MYkBf