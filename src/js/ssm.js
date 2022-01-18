import { Modal } from 'bootstrap'; // bootstrap 5

document.addEventListener('core:server-side-message', function(event) {
    const html = `
        <div class="modal" tabindex="-1" id="serverErrorModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="
                        position: absolute;
                        z-index: 1;
                        right: 0;
                        top: 0;
                    "></button>
                    <div class="modal-body">
                        ${event.detail.content}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.querySelector('body').insertAdjacentHTML('beforeend', html);

    const element = document.getElementById('serverErrorModal');

    new Modal(element).show();

    element.addEventListener('hide.bs.modal', function() {
        element.remove();
    });
});
