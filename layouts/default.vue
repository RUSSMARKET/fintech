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
    padding: 30px;
    height: calc(100vh - 60px);
    overflow: auto;
}
.content-wrapper{
    max-width: calc(100vw - 200px);
}
</style>