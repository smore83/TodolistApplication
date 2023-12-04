import { Modal, Box, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import Button from '../../atoms/button';
import TextField from '../../atoms/Textfield';
const handleStyle={
    // height:'200px',
    // width:"400px",
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background:'linear-gradient(violet,white,red)',
}

const ModalComponent = ({ open, handleClose, selectedProduct, saveProduct }:any) => {

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedProduct = { ...selectedProduct, name: event.target.value };
    // saveProduct(updatedProduct);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedProduct = { ...selectedProduct, description: event.target.value };
    // saveProduct(updatedProduct);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={handleStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedProduct && (
              <TableRow key={selectedProduct.id}>
                <TableCell>{selectedProduct.id}</TableCell>
                <TableCell>
                  <TextField
                    placeholder="name"
                    value={selectedProduct.name}
                    onChange={handleNameChange}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="description"
                    value={selectedProduct.description}
                    onChange={handleDescriptionChange}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    startIcon={""}
                    style={{ color: 'black' }}
                    variant="contained"
                    onClick={() => saveProduct(selectedProduct)}
                  >
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
    </Modal>
  );
};

export default ModalComponent;