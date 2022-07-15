import React from "react"
import { Link } from "react-router-dom"

export default function EBreadcrumb(props) {
    const { breadcrumbItems, title } = props

    const renderElement = () => {
        const rows = []
        for (const index in breadcrumbItems) {
            rows.push(
                <li className="inline-flex items-center">
                    <Link
                        to={breadcrumbItems[index].path}
                        className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        <span className={parseInt(index) === breadcrumbItems.length - 1 ? "font-medium" : "font-thin"}>
                            {breadcrumbItems[index].name}
                        </span>
                        {parseInt(index) === breadcrumbItems.length - 1 ? (
                            <></>
                        ) : (
                            <svg
                                className="pl-2 w-6 h-6 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        )}
                    </Link>
                </li>
            )
        }
        return (
            <>
                <nav className="flex px-8 pt-6 pb-2" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">{rows}</ol>
                </nav>
                <div className="px-8 font-bold text-2xl">{title}</div>
            </>
        )
    }

    return <>{renderElement()}</>
}
