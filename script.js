document.getElementById('calculateButton').addEventListener('click', function() {
    const labor = parseFloat(document.getElementById('labor').value) || 0;
    const materials = parseFloat(document.getElementById('materials').value) || 0;
    
    const taxRate = 0.05;
    const subtotal = labor + materials;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `SubTotal: $${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `Tax: $${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
});
