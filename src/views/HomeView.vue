<template>
    <main>
        <div class="welcome">
            <h1>Welcome to our Auth App!</h1>
            <p>Please feel free to use it as template for any app that requires an Authentication!</p>
        </div>
        

        <button class="btn">Logout</button>
    </main>
</template>

<style scoped>
main {
    padding: 1rem;
}

h1{
    margin-bottom: 1rem;
}
p{
    margin-bottom: 1rem;
}

.btn{
    display: inline-block;
    width: fit-content;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    background-color: var(--primary);
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.2s ease;
}

.btn:hover {
    background-color: var(--primary-dark);
}
</style>
