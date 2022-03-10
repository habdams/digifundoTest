import React from 'react';

export function ApplicantAccess() {
    
  
  return (
        <>
            <div>
                <h1 className='text-sm p-1 border border-none'>Anwendungs-ID</h1>
                <p>Bitte geben Sie den an Ihre E-Mail gesendeten Zugangscode in das Feld unten ein.</p>
            </div>

            <div>
                <label htmlFor="zugangscode">Zugangscode</label>
                <input type="text" name="Zugangscode" id="zugangscode" />
                <a href="">einreichen</a>
            </div>
        </>
    )
}