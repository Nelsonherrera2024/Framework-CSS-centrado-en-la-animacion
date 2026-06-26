* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.container {
    width: min(650px, 100%);
}

h2 {
    color: #f8fafc;
    margin-bottom: 1rem;
    text-align: center;
}

.input-wrapper {
    position: relative;
}

textarea {
    width: 100%;
    min-height: 170px;
    resize: none;
    border: 2px solid #334155;
    border-radius: 14px;
    padding: 1rem;
    font-size: 1rem;
    background: #111827;
    color: #f8fafc;
    outline: none;
    transition: .3s;
}

textarea:focus {
    border-color: #6366f1;
    box-shadow: 0 0 18px rgba(99,102,241,.35);
}

/* Mention Dropdown */

.mention-box {
    position: absolute;
    left: 0;
    top: calc(100% + 12px);
    width: 100%;
    background: rgba(17,24,39,.96);
    border: 1px solid #334155;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,.45);
    animation: ease-slide-up .28s ease;
    z-index: 100;
}

/* Mention Item */

.mention-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px;
    cursor: pointer;
    transition: .25s;
}

.mention-item:hover {
    background: #263247;
}

.mention-item.active {
    background: #3b82f6;
}

.avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg,#6366f1,#8b5cf6);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.05rem;
    flex-shrink: 0;
    transition: transform .25s;
}

.mention-item:hover .avatar {
    transform: rotate(8deg) scale(1.08);
}

.info {
    display: flex;
    flex-direction: column;
}

.info strong {
    color: white;
    font-size: .98rem;
}

.info small {
    color: #94a3b8;
    margin-top: 3px;
}

.highlight {
    color: #facc15;
    font-weight: bold;
}

/* Animation */

@keyframes ease-slide-up {

    from {
        opacity: 0;
        transform: translateY(14px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

.ease-slide-up {
    animation: ease-slide-up .28s ease;
}

/* Responsive */

@media (max-width:600px){

    body{
        padding:1rem;
    }

    textarea{
        min-height:150px;
    }

    .mention-item{
        padding:12px;
    }

    .avatar{
        width:38px;
        height:38px;
    }

}