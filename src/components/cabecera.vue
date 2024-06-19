<template>
    <header>
        <div class="logo">
            <img src="/logo.svg" alt="logo" />
        </div>
        <nav class="menu">
            <ul>
                <li>
                    <router-link to="/pan">
                        Pan
                    </router-link>
                </li>
                <li>
                    <router-link to="/cafe">
                        Café
                    </router-link>
                </li>
                <li>
                    <router-link to="/bebidas">
                      Bebidas  
                    </router-link>
                </li>
                <li>
                    <router-link to="/pasteles">
                        Pasteles
                    </router-link>
                </li>
                <li>
                    <router-link to="/autor" class="autor">
                        AUTOR
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header{
        background-color: #f68712;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        font-weight: 500;
        text-shadow: 1px 1px 3px #202020;

    }
    .logo {
        min-width: 40px;
        max-width: 80px;
    }
    img {
        width: 100%;
    }
    .menu{
        width: calc(100% / 2);

        ul{
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            padding-right: 2rem;

            a{
            text-decoration: none;
            color: white;
            }
        }
    }

    .autor{
        background-color: rgb(31, 31, 31);
        color: white;
        padding: 1rem;
        border-radius: 15px;

        &:hover{
            background-color: #61370a;
        }
    }

    @media (max-width: 768px) {
        header{
            width: 100%;
            overflow-x:auto;
            position: fixed;
            bottom: 0;
            left: 0;
            padding: 1rem;
        }
        .menu{
            width: 100%;

            li{
                padding: 0 2rem;
            }
        }
    }
</style>