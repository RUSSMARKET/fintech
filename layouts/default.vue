<template>
    <div class="page-wrapper">
        <AppNavigation />

        <div class="content-wrapper">
            <AppHeader />
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>

<style>
body{
    background-color: #E7EEFF;
    overflow: hidden;
}
.page-wrapper{
    display: grid;
    grid-template-columns: 200px 1fr;
}
main{
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
}
.content-wrapper{
    max-width: calc(100vw - 200px);
}
</style>