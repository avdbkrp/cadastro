import React, { Component } from 'react'

export default class NewRegister extends Component {

    handleChange = (target) => {
        switch (target.id) {
            case 'cadastro':
                
                break
        
            default:
                return null
        }
    }

    render() {
        return (
            <div className="container">
                <form>
                    <p>
                        <label>
                            <input id="cadastro" name="group1" type="radio" defaultChecked />
                            <span>Cadastro</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input id="alteracao" name="group1" type="radio" />
                            <span>Alteração</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input id="substituicao" name="group1" type="radio" />
                            <span>Substituição</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input id="cpf" name="group1" type="radio" />
                            <span>Cadastro CPF</span>
                        </label>
                    </p>
                </form>
            </div>
        )
    }
}