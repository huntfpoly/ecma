import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { parseRequestUrl } from "./utils";
import Error404 from "./pages/Error404";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const routes = {
    "/": HomePage,
    "/products": ProductsPage,
    "/products/:id": ProductDetailPage,
};

const router = async () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : "/") + (id ? `/:id` : "");
    const page = routes[parseUrl] ? routes[parseUrl] : Error404;

    $("#root").innerHTML = await page.render();
};

//
window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
