import React from 'react';
import Header from '../../components/Header';
import { StyledContact } from './style';

const Contato = () => {
    return (
        <StyledContact>
            <Header />
            <div className="content">
                <h1>Entre em Contato</h1>
                <p>Envie-nos uma mensagem e entraremos em contato o mais breve possível.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </StyledContact>
    );
};

export default Contato;