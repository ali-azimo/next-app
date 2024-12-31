import React from "react";

export default function CreateListng(){
    return(
        <main className="p-3 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-center my-7">
                Criar um novo produto
            </h1>

                {/* Formulario */}
            <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <input 
                        type="text" 
                        placeholder="Nome do produto" 
                        className="p-3 border border-gray-300 rounded-lg"
                        id="name"
                        maxLength='62'
                        minLength='10' 
                        required
                    />
                    <textarea
                        placeholder="Descrição do produto"
                        className="p-3 border border-gray-300 rounded-lg"
                        id="description"
                        maxLength='200'
                        minLength='10'
                        required
                    />
                    <input
                        type="text"
                        placeholder="Endereço"
                        className="p-3 border border-gray-300 rounded-lg"
                        id="address"
                        required
                    /> 
                    <div className="flex gap-6 flex-wrap">
                        <div className="flex gap-2">
                            <input type="checkbox" id="sale" className="w-5"/>
                            <span>Venda</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="rent" className="w-5"/>
                            <span>Fornecimeto</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="parking" className="w-5"/>
                            <span>Energia</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="turnished" className="w-5"/>
                            <span>Agrcultura</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="offer" className="w-5"/>
                            <span>Minas</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <input 
                                type="number"
                                id="bedrooms"
                                min='1'
                                max='100'
                                required
                                className="p-3 border border-gray-300 rounded-lg" 
                            />
                            <p>Frutas</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input 
                                type="number"
                                id="bathrooms"
                                min='1'
                                max='100'
                                required
                                className="p-3 border border-gray-300 rounded-lg" 
                            />
                            <p>Sereas</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input 
                                type="number"
                                id="regularPrce"
                                min='1'
                                max='100'
                                required
                                className="p-3 border border-gray-300 rounded-lg" 
                            />
                            <div className="flex flex-col items-center">
                                <p>Preco normal</p>
                                <span className="text-xs">(Mts / produto)</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" 
                                id="discountPrice"
                                min='1'
                                max='100'
                                required
                                className="p-3 border border-gray-300 rounded-lg"
                            />
                            <div className="flex flex-col items-center">
                                <p>Preco discontado</p>
                                <span className="text-xs">(Mts / produto)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 gap-4">
                    <p className="font-semibold">
                        Imagens do produto:
                        <span className="font-normal text-gray-600">
                            A primeira imagem sera a imagem principal (maximo 6 imagens)
                        </span>
                    </p>
                    <div className="flex gap-4">
                        <input 
                            className="p-3 border border-gray-300 rounded-lg"
                            type="file" 
                            image="images"
                            accept="image/*"
                            multiple
                        />
                        <button className="p-3 text-green-700 border border-green-700 rounded-lg font-semibold">
                            Carregar
                        </button>
                    </div>
                    <button className="p-3 bg-blue-500 text-white rounded-lg uppercase hover:opacity-95">
                           Criar lista de fotos
                    </button>
                </div>
            </form>

        </main>
    )
}