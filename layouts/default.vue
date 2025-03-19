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
    overflow: hidden;
}
.page-wrapper{
    display: grid;
    grid-template-columns: 250px 1fr;
    background-color: #E7EEFF;
}
main{
    padding: 30px;
    height: calc(100vh - 60px);
    overflow: auto;
}
.content-wrapper{
    max-width: calc(100vw - 250px);
}
</style>